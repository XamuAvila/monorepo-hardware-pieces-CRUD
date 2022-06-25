import { Piece } from './../database/entities/piece.entity';
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreatePieceRequestDto } from './dto/create-piece-request.dto';

@Injectable()
export class PiecesService {
    constructor(@Inject('PIECE_REPOSITORY') private pieceRepository: Repository<Piece>){}
    
    async findAll(): Promise<Piece[]>{
        return this.pieceRepository.find();
    }

    async createPiece(piece:CreatePieceRequestDto): Promise<Piece>{
        return this.pieceRepository.save(piece);
    }
}
