import React from 'react';
import { Button,SIZE} from "baseui/button";
import {FormControl} from 'baseui/form-control';
import {Input} from 'baseui/input';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import Link from 'next/link'
import {Card,StyledBody} from 'baseui/card'
//import styled from 'styled-components'
import {FlexGrid,FlexGridItem} from 'baseui/flex-grid'

type User = {
   userName:string
   password:string
}
// Apollo client 

const IndexPage: React.FunctionComponent<User> = () => {
  
  const [css,theme] = useStyletron()
  const inputRef = React.useRef<HTMLInputElement>(null);
  
  const [userName, setUserName] =React.useState<string>("")
  const [password, setpassword] = React.useState<string|number>("")
  
  const OnhandleSubmit = event => {
    event.preventDefault()
    setUserName("")
    setpassword("")
  }
  const login = () => {
    if (userName == "henry" && password == "password") {
      
    } else {
       console.log("invalid users and password")
    }
  }
  return (

  <React.Fragment>
    <div className={css({ width: '800px', marginTop: '80px', backgroundColor: 'ceral', marginLeft: '150px', })}>
      <Card
        overrides={{Root: {style: {width: '1000px',background:'#212121'}}}}
        >
        <StyledBody>
          <Block
              as='h2'
              overrides={{
              Block: {
                style: {
                  color: '#fff',
                  fontSize: '40px',
                  fontFamily: 'aerial',
                  alignText: 'center',
                  marginTop: '20px',
                  marginLeft:'100px'
                },
              },
            }}
          >
            Account Details
          </Block>
          <FlexGrid
             flexGridColumnCount={2}
             flexGridColumnGap="scale900"
             flexGridRowGap="scale900"
            >
              <FlexGridItem
                overrides={{
                  Block: {
                    style: ({$theme}) => ({
                      width: `calc((200% - ${$theme.sizing.scale800}) / 3)`,
                    }),
                  },
                }}
              >
                <form onSubmit={OnhandleSubmit}>
                  <FormControl
                    label={"User Name"}
                    caption={"user name"}
                    overrides={{
                      Label: {
                        style: {
                          color: 'white',
                          fontSize: '30px',
                          fontFamily:'aerial',
                          
                        }
                      }
                    }}
                  >
                  <Input
                    inputRef={inputRef}
                    value={userName}
                    onChange={(event)=>setpassword(event.currentTarget.value)}
                    overrides={{
                      Root: {
                        style: {
                          width: '50%',
                          marginTop: theme.sizing.scale400,
                          marginRight: theme.sizing.scale400,
                        },
                      },
                    }}
                    />        
                  </FormControl>
                  
                  <FormControl
                    label={"password"}
                    caption={"password"}
                    overrides={{
                      Label: {
                        style: {
                        color:'white',
                        fontSize: '30px',
                          fontFamily:'aerial'
                        }
                      }
                    }}
                  >
                  <Input
                    inputRef={inputRef}
                    value={password}
                    required
                    type="password"
                    onChange={(event) =>setpassword(event.currentTarget.value)}
                    overrides={{
                    Root: {
                        style: {
                        color:'white',
                        width: '50%',
                        marginTop: theme.sizing.scale400,
                        marginRight: theme.sizing.scale400,
                      },
                      },
                    }}
                />
                </FormControl>
                
                <Link href='/TableDetails'>
                  <Button size={SIZE.large}>Login</Button>
                </Link>
                
              </form>
              </FlexGridItem>

              <FlexGridItem>
                <h2>Enjoy using the software</h2>
              </FlexGridItem>
              
            </FlexGrid>
           </StyledBody>
        </Card>
    </div>
  </React.Fragment>
  
)
}
export default IndexPage;

