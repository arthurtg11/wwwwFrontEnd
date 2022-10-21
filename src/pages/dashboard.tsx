import { SimpleGrid, Box, Text, Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import dynamic from "next/dynamic";
import { AuthContext } from "../contexts/AuthContext";
import { useCan } from "../hooks/useCan";
import { setupAPIClient } from "../services/axios/api";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

import { withSSRAuth } from "../util/withSSRAuth";

export default function Dashboard() {
  const { user, signOutCliente } = useContext(AuthContext);

  const userCanSeeMetrics = useCan({
    roles: ["ROLE_USER"],
  });

  var options = {
    colors: ["#20E647"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%",
          background: "#293450",
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15,
          },
        },
        dataLabels: {
          enabled: true,

          name: {
            show: false,
            offsetY: 0,
            color: "#fff",
            fontSize: "13px",
          },
          value: {
            color: "#fff",
            fontSize: "30px",
            show: true,
            width: "20px",
            height: "50px",
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#87D4F9"],
        stops: [0, 100],
      },
    },

    labels: ["Progress"],
  };

  return (
    <Box
      w="100%"
      my="6"
      maxWidth={1480}
      minHeight={950}
      px="6"
      pt="4"
      bg="gray.800"
      borderRadius={8}
    >
      <SimpleGrid
        flex="1"
        gap="4"
        minChildWidth="160px"
        minHeight={300}
        align="flex-start"
      >
        <Flex
          padding="1% 2% 1% 1%"
          maxH="300px"
          borderRadius={8}
          pb="4"
          w="400px"
          alignItems="center"
          justifyItems="center"
          display="table-column"
        >
          <Text fontSize="lg" mb="1" textAlign="center">
            Frequencial Semanal
          </Text>
          <Box w="100%" h="100%" ml="3%" mt="-2%" pb="1%">
            <Chart
              height="100%"
              options={options}
              series={[88]}
              type="radialBar"
            />
          </Box>
        </Flex>
        <Flex
          padding="1% 2% 1% 1%"
          maxH="300px"
          borderRadius={8}
          pb="4"
          w="400px"
          alignItems="center"
          justifyItems="center"
          display="table-column"
        >
          <Text fontSize="lg" mb="1" textAlign="center">
            Progresso do Curso (Atual)
          </Text>

          <Box w="100%" h="100%" ml="3%" mt="-2%" pb="1%">
            <Chart
              height="100%"
              options={options}
              series={[12]}
              type="radialBar"
            />
          </Box>
        </Flex>
        <Flex
          padding="1% 2% 1% 1%"
          maxH="300px"
          borderRadius={8}
          pb="4"
          w="400px"
          alignItems="center"
          justifyItems="center"
          display="table-column"
        >
          <Text fontSize="lg" mb="1" textAlign="center">
            Frequencial Anual
          </Text>
          <Box w="100%" h="100%" ml="3%" mt="-2%" pb="1%">
            <Chart
              height="100%"
              options={options}
              series={[8]}
              type="radialBar"
            />
          </Box>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);

  return {
    props: {},
  };
});
