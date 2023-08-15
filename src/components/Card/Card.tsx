import Footer from "../Footer/Footer";
import { Header } from "../Header/Header";
import Button from "../Button/Button";
import "./Card.css";
import { Center, ChakraProvider, Input, Box, Text } from "@chakra-ui/react";
export const handleWelcomeClick = () => {
  alert('Bem-vindo ao nosso aplicativo!');
};
export const Card = () => {
  
  return (
    <>
      <Header />
      <ChakraProvider>
        <Box minHeight="60vh" backgroundColor="#1f182c" padding="25px">
          <section className="card__container">
            <Box
              className="card__01"
              backgroundColor="#1f182c"
              borderRadius="25px"
              width="500px"
            >
              <Text fontSize="5xl">
                Na Dio Banks valorizamos seu dinheiro, em poucos dias você
                ficará milionário!
              </Text>
            </Box>
            <div className="login__form">
              <Box backgroundColor="#1f182c" borderRadius="25px" width="100%">
                <h2 className="login__title">Já Possui cadastro?</h2>
                <h3 className="login__subtitle">
                  Faça seu login e make the change._
                </h3>

                <form className="login__input">
                  <Input
                    className="form__input"
                    type="email"
                    placeholder="Endereço de e-mail"
                    id="emailInput"
                    width="100%"
                    required
                  />

                  <Input
                    className="form__input"
                    type="password"
                    placeholder="Senha"
                    id="senhaInput"
                    width="100%"
                    required
                  />
                </form>
                <Center>
                  <Button
                    onClick={handleWelcomeClick}
                    text="Entrar"
                    className="login__button"
                  ></Button>
                </Center>
              </Box>
            </div>
          </section>
        </Box>
      </ChakraProvider>
      <Footer />
    </>
  );
};
