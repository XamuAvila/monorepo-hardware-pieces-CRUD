import { ApiProperty } from "@nestjs/swagger";

export class AuthRequestDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
}
