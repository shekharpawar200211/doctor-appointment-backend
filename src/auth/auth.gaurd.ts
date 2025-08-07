import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private configService: ConfigService) { }

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers['authorization'];

        const expectedToken = `Bearer ${this.configService.get('AUTH_TOKEN')}`;

        if (authHeader !== expectedToken) {
            throw new UnauthorizedException('Invalid authorization token');
        }

        return true;
    }
}
