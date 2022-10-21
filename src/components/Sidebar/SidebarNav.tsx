import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="10" justify="center" px="5%" minW="220px" pt="6">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/dashboard">
          Home
        </NavLink>
        <NavLink icon={FaRegHandshake} href="/sendoffer">
          Meu Curso
        </NavLink>
        <NavLink icon={RiInputMethodLine} href="/forms">
          Agenda
        </NavLink>
        <NavLink icon={RiGitMergeLine} href="/automation">
          Chat
        </NavLink>
      </NavSection>
      <NavSection title="SALA DE AULA">
        <NavLink icon={RiInputMethodLine} href="/forms">
          Salas
        </NavLink>
        <NavLink icon={RiGitMergeLine} href="/automation">
          Provas
        </NavLink>
        <NavLink icon={RiGitMergeLine} href="/automation">
          Exercício
        </NavLink>
        <NavLink icon={RiGitMergeLine} href="/automation">
          Histórico Escolar
        </NavLink>
      </NavSection>
    </Stack>
  );
}
