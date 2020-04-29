import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Dataset} from './dataset.model';

@model({settings: {strict: false}})
export class Instrument extends Entity {
  @property({
    type: 'string',
    id: true,
    description: 'instrument identifier',
    required: true,
    generated: false,
  })
  pid: string;

  @property({
    type: 'string',
    description: 'instrument name',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    description: 'Facility where data was measured',
    required: true,
  })
  facility: string;

  @property({
    type: 'number',
    description: 'score of how well instrument is mathing the query',
  })
  score: number;

  // Define well-known properties here
  @belongsTo(() => Dataset)
  dataset?: Dataset;

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Instrument>) {
    super(data);
  }
}

export interface InstrumentRelations {
  // describe navigational properties here
}

export type InstrumentWithRelations = Instrument & InstrumentRelations;
