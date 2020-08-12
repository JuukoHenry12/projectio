import * as React from 'react';
import {Table} from 'baseui/table';
import Layout from '../../components/Layout';
import {FormControl} from 'baseui/form-control';
import { Input } from 'baseui/input';
import { useStyletron } from 'baseui';
import { Button , SHAPE} from 'baseui/button';
import { Select } from 'baseui/select';
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid'

//import { useQuery,gql } from '@apollo/client';
const DATA = [];
const COLUMNS = ['Details', 'Item','Qauntity', 'amount'];

type Props = {
  payment: string;
  purchase: string;
  quantity: number;
  amount: number;
 
}

const TableDetails: React.FC<Props> = ():JSX.Element => {
  const [css] = useStyletron();
  const [paymentDetails, setPaymentDetails] = React.useState([]);
  const [Purchased, setPurchased] = React.useState([]);
  
  const [Amount, setAmount] = React.useState<number | null>(0);
  const [Quantity, setQuantiy] = React.useState<number | null>(0);
  //const [Data, setData] = React.useState([]);
  
  const inputRef = React.useRef<HTMLInputElement | null>()
   
  const submitHandler = (event:React.FormEvent)=> {
    event.preventDefault()
    setPaymentDetails([])
    setPurchased([])
    setAmount(0)
    setQuantiy(0)
  }
  
  const AddData = () => {
    const pay = paymentDetails.map((item) => item.id)
    const pay1 = Purchased.map((item) => item.id)
    const merge = [...pay, ...pay1, Quantity, Amount]
    DATA.push(merge)
  }
  
  return (
    <Layout>
      <form onSubmit={submitHandler} className={css({display:"flex",    marginTop:'30px'})}>
        <FormControl
          label={"Details"}
          overrides={{
            Label: {
              style: {
                color: 'red',
                fontSize: '25px',
                fontFamily: 'aerial',
                marginBottom:'20px'
              }
            }
          }}
        >
       <Select
            id="select-id"
            value={paymentDetails}
            onChange={({value}: any) => setPaymentDetails(value)}
            options={[
              {id: 'cash'},
              {id: 'Credit Card'}
              
            ]}
            labelKey="id"
            valueKey="id"
            required
            
         
          />
        </FormControl>

        <FormControl
          label={"Item"}
          overrides={{
            Label: {
              style: {
                color: 'red',
                fontSize: '30px',
                fontFamily:'aerial',
                display: 'flex',
                marginLeft:'20px'
              }
            }
          }}
          >
         <Select
            id="select-id"
            options={[
              { id: 'medicine' },
              { id: 'sugar' },
              { id: 'flavour' },
              {id: 'Drugs'},
            ]}
            labelKey="id"
            value={Purchased}
            onChange={({value}:any)=> setPurchased(value)}
            required
           />
        </FormControl>

        <FormControl
          label={"Qualtity"}
          overrides={{
            Label: {
              style: {
                fontSize: '25px',
                fontFamily:'aerial',
                display: 'flex',
                marginLeft:'20px'
              }
            }
          }}
          >
          <Input
            min={0}
            max={100}
            type="number"
            value={Quantity}
            onChange={({value}:any) => setQuantiy(value)}
            required
           />
        </FormControl>


        <FormControl
          label={"Amount"}
          overrides={{
            Label: {
              style: {
                color: 'red',
                fontSize: '25px',
                fontFamily:'aerial',
                display: 'flex',
                marginLeft:'20px'
              }
            }
          }}
          >
          <Input
            ref={inputRef}
            type="number"
            value={Amount}
            onChange={({value}:any)=> setAmount(value)}
            required
            
          />
        </FormControl>
       <Button
          shape={SHAPE.pill}
          onClick={AddData}
          overrides={{
            BaseButton: {
              style: {
                marginLeft: '20px',
                height:'50px',
                width:"250px"
              }
            }
          }}
        >submit</Button>
      </form>
      <p></p>
      <FlexGrid
      flexGridColumnCount={2}
      flexGridColumnGap="scale800"
      flexGridRowGap="scale800"
      >
        <FlexGridItem
          overrides={{
          Block: {
            style: ({$theme}) => ({
              width: `calc((200% - ${$theme.sizing.scale800}) / 3)`,
            }),
          },
        }}
        > <Table columns={COLUMNS} data={DATA} />
      </FlexGridItem>
        <FlexGridItem>
        
        </FlexGridItem>
        
       </FlexGrid>
      <p></p>
    </Layout>
    
  )
}
export default TableDetails;