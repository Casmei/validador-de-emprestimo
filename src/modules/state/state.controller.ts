import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { StateService } from './state.service';

@Controller('state')
export class StateController {
  constructor(private readonly stateService: StateService) {
    //
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.stateService.findOneById(id);
  }
}
