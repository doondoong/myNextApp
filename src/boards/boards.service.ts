import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './board.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
//Injectable 데코레이션 덕분에 어디서든 사용이 가능하다
@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  // 특정게시물 조회(TypeOrm)
  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne(id);
    if (!found) {
      throw new NotFoundException('해당 게시물이 존재하지 않습니다.');
    }
    return found;
  }

  // 개시물 생성하기(TypeOrm)
  createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto);
  }

  // 특정 게시물 삭제하기(TypeOrm)
  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('해당 ID의 데이터가 없습니다.');
    }
  }

  // 특정 게시물 상태 변경하기
  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    // type A
    // this.boards.find((board) => board.id === id).status = status;
    // type B (리턴이 필요할때)
    const board = await this.getBoardById(id);
    board.status = status;
    await this.boardRepository.save(board);

    return board;
  }

  // 전체 게시물 가져오기
  async getAllBoards(): Promise<Board[]> {
    return this.boardRepository.find();
  }

  // // 전체 게시물 가져오기
  // getAllBoards(): Board[] {
  //   return this.boards;
  // }
  // // 개시물 생성하기
  // createBoard(createBoardDto: CreateBoardDto) {
  //   const { title, description } = createBoardDto;
  //   const board: Board = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC,
  //   };
  //   this.boards.push(board);
  //   return board;
  // }
  // // 특정 게시물 조회하기
  // getBoardById(id: string): Board {
  //   const found = this.boards.find((board) => board.id === id);
  //   if (!found) {
  //     throw new NotFoundException('해당 게시물이 존재하지 않습니다.');
  //   }
  //   return found;
  // }
  // // 특정 게시물 삭제하기
  // deleteBoard(id: string): void {
  //   const found = this.getBoardById(id);
  //   this.boards = this.boards.filter((board) => board.id !== found.id);
  // }
  // // 특정 게시물 상태 변경하기
  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   // type A
  //   // this.boards.find((board) => board.id === id).status = status;
  //   // type B (리턴이 필요할때)
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}
