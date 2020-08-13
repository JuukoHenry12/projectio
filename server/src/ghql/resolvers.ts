import { invoice} from '../invoice'
export const resolvers = {
  Query: {
    invoice: () => {
      return invoice
    }
  },
  Mutation: {
    deleteInvoice: (_root: undefined, { id }: { id: string }) => {
      for (let i = 0; i < invoice.length; i++) {
        if (invoice[i].id === id) {
          return invoice.splice(i, 1)[0];
        }
      }
      throw new Error("failed to deleted listing");
  
    }
  }
};