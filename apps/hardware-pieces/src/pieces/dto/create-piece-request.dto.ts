import { ApiProperty } from "@nestjs/swagger";

export class CreateUpdatePieceRequestDto {

    @ApiProperty()
    name: string;

    @ApiProperty()
    price: number;

    @ApiProperty()
    quantityStock: number
}
