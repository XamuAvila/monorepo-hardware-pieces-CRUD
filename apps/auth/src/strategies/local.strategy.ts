import { AuthService } from './../auth.service';
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(@Inject(AuthService) private readonly authService:AuthService) {
        super({
            usernameField: 'email'
        })
    }

    async validate(email:string, password:string){
        const user = await this.authService.validateUser(email, password);
        if(!user){
            throw new UnauthorizedException("Invalid and/or password/email")
        }
        return user;
    }
}
