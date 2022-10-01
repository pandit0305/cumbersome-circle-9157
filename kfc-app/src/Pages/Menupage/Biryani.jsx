import {
    Box,
    Spacer,
    Grid,
    GridItem,
    Img,
    Heading,
    Button,
    Center,
  } from "@chakra-ui/react";
  
  import axios from "axios";
  import { useState } from "react";
  import { useEffect } from "react";
  
  import React from "react";
  import { CartContext } from "../../context/cartcontext/CartContext";
  import { addToCart } from "../../context/cartcontext/action";
  
  export default function Biryani() {
    const { dispatch } = React.useContext(CartContext);
  
    const [biryani, setBiryani] = useState([]);

    useEffect(() => {
      axios({
        url: "http://localhost:8000/biryani",
        method: "GET",
      }).then((res) => setBiryani(res.data));
    }, []);
    return (
      <>
          <div id="biryani"></div>
          <Box mt={"50px"} borderRadius={"5px"}>
          <Spacer h={"20px"} />
          <Box>
            <Heading
              fontSize={"32px"}
              lineHeight={"50px"}
              // border={"1px solid red"}
              ml={"20px"}
              letterSpacing={"-2px"}
            >
              BIRYANI BUCKETS
            </Heading>
          </Box>
          <Spacer h={"20px"} />

          <Grid
            templateColumns={"repeat(3, 1fr)"}
            rowGap="50px"
            w={"865px"}
            // border="1px solid red"
            mt={"20px"}
          >
            {biryani.map((ele) => (
              <GridItem
                colSpan={{ base: 3, md: 1, sm: 1 }}
                ml="20px"
                w={"260px"}
                h={"475px"}
                // border={"1px solid red"}
                borderRadius={"10px"}
                boxShadow={"lg"}
                key={ele.id}
                position="relative"
              >
                <Img
                  src={ele.image}
                  alt="image_launch"
                  w={"auto"}
                  h={"210px"}
                  borderRadius={"5px"}
                />
                <Heading
                  fontSize={"16px"}
                  m={"10px 0px 10px 0px"}
                  w={"200px"}
                  pl={"5px"}
                  ml={"15px"}
                >
                  {ele.name}
                </Heading>
                <Heading fontSize={"16px"} m={"10px 0px 10px 0px"} pl={"5px"} ml={"15px"}>
                  {ele.price}
                </Heading>
                <p style={{ width: "220px", marginLeft: "15px" }}>
                  {ele.detail}
                </p>
                <Box position="absolute" bottom={"25px"} left="30px">
                  <Center>
                    <Button
                      w={"184px"}
                      h={"44px"}
                      borderRadius={"30px"}
                      bgColor={"red"}
                      color={"white"}
                      _hover={{ background: "rgba(255, 0, 0, 0.8)" }}
                      onClick={()=>dispatch(addToCart(ele))}

                    >
                      Add to Cart{" "}
                      <Img
                        src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
                        ml={"5px"}
                      />
                    </Button>
                  </Center>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </>
    );
  }
  