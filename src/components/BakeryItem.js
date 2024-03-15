// TODO: create a component that displays a single bakery item
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button, ButtonGroup} from '@chakra-ui/react'

export default function BakeryItem(props){
    return(
        <Card maxW='sm'>
            <CardBody>
                <Image src={props.image} alt={props.name} borderRadius='lg'/>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{props.name}</Heading>
                    <Text>
                       {props.description}
                    </Text>
                    
                </Stack>
            </CardBody>
            <CardFooter>
                <ButtonGroup spacing='175'>
                <Text color='blue.600' fontSize='2xl'>
                        {props.price}
                    </Text>
                <Button variant='ghost' colorScheme='blue' onClick={() => props.func(props.name, props.price)}>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
        </Card> 
    )
}