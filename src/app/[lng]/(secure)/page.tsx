// @ts-ignore // Ignore no explicit type for global 'useTranslation' function
'use client'
import { useTranslation } from '@/app/i18n/client'
import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

interface HomeProps {
  params: { lng: string } // Define type for params and lng property
}

export default function Home({ params: { lng } }: HomeProps) {
  const { t } = useTranslation(lng) // Explicit type for 't'
  const { push } = useRouter() // Explicit type for 'push'

  const goToDashboard = () => push(`${lng}/dashboard`) // Type guard for path

  return (
    <Box>
      <Typography variant="h2">{t('page_name')}</Typography>
      <Typography variant="h4">next-mui-kickstarter</Typography>
      <Typography variant="h5">
        Setup is ready for NextJS With App router, Eslint, Mui, i18next, Redux
      </Typography>
      <Button variant="contained" onClick={goToDashboard}>
        Go to Dashboard
      </Button>
    </Box>
  )
}
