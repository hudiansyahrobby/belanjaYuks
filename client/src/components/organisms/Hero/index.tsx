import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import HeroImage from "../../atoms/HeroImage";
import HeroContent from "../../molecules/HeroContent";

const Hero = () => {
  return (
    <SimpleGrid columns={2} spacing={10} mt="40">
      <HeroImage
        image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        title="HAHAHAH"
      />
      <HeroContent
        title="Headset Black Box"
        subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          magni repellat. Exercitationem deserunt ducimus doloribus sapiente
          iure in. Fugit voluptatibus amet vel sequi esse quia iste possimus
          alias accusamus! Aperiam nihil nesciunt ipsum reiciendis doloremque,
          officiis tempora ducimus voluptatibus rem!"
      />
    </SimpleGrid>
  );
};

export default Hero;
