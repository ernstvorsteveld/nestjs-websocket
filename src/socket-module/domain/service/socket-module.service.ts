import { Injectable, Logger } from '@nestjs/common';
import { SocketModuleGateway } from '../../adapter/out/socket/socket-module.gateway';
import { User } from '../../domain/model/socket-module.user';
import { EventUseCases } from '../../port/in/socket-module.usecases';

@Injectable()
export class SocketModuleService implements EventUseCases {
  constructor(private readonly gateway: SocketModuleGateway) {}

  private readonly logger = new Logger(SocketModuleGateway.name);

  create(user: User): Promise<void> {
    this.logger.debug(`Creating user: ${user.userId} (${user.username})`);
    return this.gateway.emitUserCreated(user);
  }
}
