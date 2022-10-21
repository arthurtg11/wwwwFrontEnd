import { Box, Text, Stack, Icon } from '@chakra-ui/react'
import { ReactNode } from 'react';

interface NavSectionProps {
    title: string;
    children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
    return (
        <Box>
            <Text fontWeight="bold"  fontSize="15px">{title}</Text>
            <Stack spacing="4" mt="6" align="stretch">
                {children}
            </Stack>
        </Box>
    );
}