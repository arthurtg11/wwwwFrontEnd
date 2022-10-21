import {
  Flex,
  Button,
  Stack,
  Input,
  Box,
  Text,
  FormLabel,
  HStack,
} from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../contexts/AuthContext";
import { withSSRGuest } from "../util/withSSRGuest";
import { useRouter } from "next/router";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export default function Login() {
  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    event.preventDefault();

    const data = {
      email: values.email,
      password: values.password,
    };
    signIn(data).catch((e) => {
      setReturnLogin("Invalid Credentials");
    });
  };
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const { errors } = formState;

  const [returnLogin, setReturnLogin] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  const router = useRouter();
  const { asPath } = useRouter();

  //https://static.vecteezy.com/ti/vetor-gratis/p1/2256853-login-page-design-for-new-user-vetor.jpg
  return (
    <Flex w="100%" justify="center" mt="4%">
      <Flex
        as="form"
        onSubmit={handleSubmit(handleSignIn)}
        maxW="1080px"
        h="80%"
        justify="center"
        align="center"
        justifySelf="center"
        px="auto"
        borderRadius="2%"
        bgColor="gradient()"
        bgGradient="linear(to-t, #8D5CF6, #252B42)"
      >
        <Flex h="100%" w="50%" p="10" display="table-column">
          <Text
            cursor="pointer"
            fontSize={["2xl", "3xl"]}
            fontWeight="bold"
            letterSpacing="tight"
            w="64"
            color="#FFFFFF"
            onClick={() => router.push("/")}
          >
            Test
            <Text as="span" color="#8D5CF6" ml="1">
              .
            </Text>
            English
          </Text>
          <Flex
            mb="auto"
            alignItems="center"
            justifyContent="space-between"
            flexDirection="column"
            h="95%"
          >
            <Box>
              <Text
                fontWeight="700"
                fontSize="50px"
                lineHeight="24px"
                letterSpacing="0.2px"
                mb="1%"
                mt="35%"
              >
                Welcome to ...
              </Text>
              <Text
                fontWeight="700"
                fontSize="14px"
                lineHeight="24px"
                letterSpacing="0.2px"
                mb="1%"
                mt="10%"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </Text>
            </Box>
            <Text
              fontWeight="700"
              fontSize="14px"
              lineHeight="24px"
              letterSpacing="0.2px"
              mb="1%"
              w="100%"
              mt="auto"
            >
              Lorem Ipsum is simply dummy text
            </Text>
          </Flex>
        </Flex>
        <Flex
          h="100%"
          w="50%"
          p="20"
          bgColor="white"
          display="table-column"
          borderRadius="2%"
          borderLeftRadius="none"
        >
          <Text
            color="#8D5CF6"
            fontWeight="700"
            fontSize="37px"
            lineHeight="24px"
            letterSpacing="0.1"
            marginBottom="5%"
          >
            Login
          </Text>
          <Text
            color="#737373"
            fontWeight="500"
            fontSize="14px"
            lineHeight="20px"
            letterSpacing="0.1px"
            mb="5%"
          >
            Welcome, Login to get amazing discounts and offers only for you.
          </Text>
          <Box h="9%" mb="15%">
            <Text
              minH="10px"
              color="red"
              fontWeight="500"
              fontSize="12px"
              lineHeight="20px"
              letterSpacing="0.2px"
            >
              {returnLogin}
            </Text>
            <FormLabel>
              <Text
                color="#737373"
                fontWeight="500"
                fontSize="14px"
                lineHeight="20px"
                letterSpacing="0.2px"
              >
                Username
              </Text>
            </FormLabel>
            <Input
              h="100%"
              border="2px solid #b2b2b2"
              color="black"
              _focus={{ border: "2px solid #b2b2b2" }}
              name="email"
              label="E-mail"
              type="email"
              {...register("email")}
              onChange={() => setReturnLogin("")}
              error={errors.email}
            />
            <Text
              color="red"
              fontWeight="500"
              fontSize="12px"
              lineHeight="20px"
              letterSpacing="0.2px"
            >
              {errors.email?.message}
            </Text>
          </Box>
          <Box h="9%" mb="12%">
            <FormLabel>
              <Text
                color="#737373"
                fontWeight="500"
                fontSize="14px"
                lineHeight="20px"
                letterSpacing="0.2px"
              >
                Password
              </Text>
            </FormLabel>
            <Input
              h="100%"
              border="2px solid #b2b2b2"
              color="black"
              _focus={{ border: "2px solid #b2b2b2" }}
              error={errors.email}
              name="password"
              label="Password"
              {...register("password")}
              onChange={() => setReturnLogin("")}
            />
            <Text
              color="red"
              fontWeight="500"
              fontSize="12px"
              lineHeight="20px"
              letterSpacing="0.2px"
            >
              {errors.password?.message}
            </Text>
          </Box>
          <Button
            type="submit"
            fontWeight="700"
            fontSize="20px"
            lineHeight="24px"
            letterSpacing="0.1"
            marginBottom="5%"
            bgColor="#8D5CF6"
            _hover={{
              color: "#8D5CF6",
              backgroundColor: "white",
              border: "1px solid #8D5CF6",
            }}
            variant="unstyled"
            w="100%"
            mt="3%"
            h="9%"
            transition="0.4s"
          >
            LOGIN
          </Button>
          <Flex alignItems="center" justifyContent="space-between">
            <HStack>
              <Text
                as="a"
                cursor="pointer"
                onClick={() => router.push("/")}
                color="#737373"
                fontWeight="500"
                fontSize="14px"
                lineHeight="20px"
                letterSpacing="0.2px"
                _hover={{
                  color: "#b2b2b2",
                }}
              >
                New User?
              </Text>
              <Text
                cursor="pointer"
                color="#8D5CF6"
                fontWeight="500"
                fontSize="14px"
                lineHeight="20px"
                letterSpacing="0.2px"
                as="a"
                onClick={() => router.push("/")}
                _hover={{
                  color: "#6D59F1",
                }}
              >
                Signup
              </Text>
            </HStack>
            <Text
              cursor="pointer"
              as="a"
              onClick={() => router.push("/")}
              color="#737373"
              fontWeight="500"
              fontSize="14px"
              lineHeight="20px"
              letterSpacing="0.2px"
              _hover={{
                color: "#b2b2b2",
              }}
            >
              Forgot your password?
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
