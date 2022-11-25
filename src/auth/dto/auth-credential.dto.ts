import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialDto {
  @IsString()
  @MinLength(4, { message: '4자이상 입력해야 합니다.' })
  @MaxLength(20, { message: '20자이하로 입력해야 합니다.' })
  username: string;

  @IsString()
  @MinLength(4, { message: '4자이상 입력해야 합니다.' })
  @MaxLength(20, { message: '20자이하로 입력해야 합니다.' })
  // 영어 + 숫자만 가능
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: '패스워드는 영어와 숫자만 가능합니다.',
  })
  password: string;
}
