import { CreateUpdatePieceRequestDto } from './dto/create-piece-request.dto';
import { PiecesService } from './pieces.service';
import { Piece } from './../database/entities/piece.entity';
import { Body, Controller, Delete, Get, HttpCode, Inject, Param, Post, Put, Query } from '@nestjs/common';

@Controller('pieces')
export class PiecesController {
    constructor(@Inject(PiecesService) private piecesService: PiecesService) { }
    @Get()
    getPieces(): Promise<Piece[]> {
        return this.piecesService.findAll();
    }

    @Post()
    createPiece(@Body() piece: CreateUpdatePieceRequestDto): Promise<Piece> {
        return this.piecesService.createPiece(piece);
    }

    @Put(':id')
    updatePiece(@Param('id') pieceId: string, @Body() piece: CreateUpdatePieceRequestDto): Promise<any> {
        return this.piecesService.updatePiece(pieceId, piece);
    }

    @Delete(':id')
    deletePiece(@Param('id') id:number):Promise<void>{
        return this.piecesService.deletePiece(id);
    }
}
