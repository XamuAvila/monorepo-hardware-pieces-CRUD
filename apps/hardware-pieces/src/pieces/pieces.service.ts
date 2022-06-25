import { Piece } from '@app/database/entities/piece.entity';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUpdatePieceRequestDto } from './dto/create-piece-request.dto';

@Injectable()
export class PiecesService {
    constructor(@Inject('PIECE_REPOSITORY') private pieceRepository: Repository<Piece>) { }

    async findAll(): Promise<Piece[]> {
        return this.pieceRepository.find();
    }

    async createPiece(piece: CreateUpdatePieceRequestDto): Promise<Piece> {
        return this.pieceRepository.save(piece);
    }

    async updatePiece(id: string, piece: CreateUpdatePieceRequestDto):Promise<Piece>{
        await this.pieceRepository.update(id, {...piece});
        return await this.pieceRepository.findOne({where:{id:id}});
    }

    async deletePiece(id:number):Promise<void>{
        await this.pieceRepository.delete(id);
    }
}
