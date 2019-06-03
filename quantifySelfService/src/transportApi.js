exports.addTransportationSchemas = {
  description: 'Create a new transportation',
  tags: ['transportations'],
  summary: 'Creates new transaportation with given values',
  body: {
    type: 'object',
    properties: {
      journeyID: { type: 'string' },
      journeyInstance: { type: 'string' },
      TransactionDate: { type: 'string' },
      Destination: { type: 'string'' },
      EndTime: { type: 'string' },
      StartTime: { type: 'string' },
      Origin: { type: 'string' },
      vehicules: { type: 'object' }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        journeyID: { type: 'string' },
        journeyInstance: { type: 'string' },
        TransactionDate: { type: 'string' },
        Destination: { type: 'string' },
        EndTime: { type: 'string' },
        StartTime: { type: 'string' },
        Origin: { type: 'string'  },
        vehicules: { type: 'object' },
        __v: { type: 'number' }
      }
    }
  }
}
