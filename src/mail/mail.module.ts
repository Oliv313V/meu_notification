import { PrismaService } from 'src/prisma.service';
import { MailController } from './mail.controller';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';

@Module({
    imports: [MailModule],
    controllers: [MailController],
    providers: [PrismaService, MailService],
})
export class MailModule {}