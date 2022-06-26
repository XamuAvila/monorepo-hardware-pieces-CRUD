import { User } from '@app/database/entities/user.entity';
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserRequestDto extends User{

    @ApiProperty()
    name: string;

    @ApiProperty()
    price: number;

    @ApiProperty()
    quantityStock: number
}
