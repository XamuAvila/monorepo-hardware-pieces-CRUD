import { CreatePieceRequestDto } from './dto/create-piece-request.dto';
import { PiecesService } from './pieces.service';
import { Piece } from './../database/entities/piece.entity';
import { Body, Controller, Get, Inject, Post } from '@nestjs/common';

@Controller('pieces')
export class PiecesController {
    constructor(@Inject(PiecesService) private piecesService: PiecesService){}
    @Get()
    getPieces():Promise<Piece[]>{
        return this.piecesService.findAll();
    }

    @Post()
    createPiece(@Body() piece:CreatePieceRequestDto): Promise<Piece>{
        return this.piecesService.createPiece(piece);
    }
}
