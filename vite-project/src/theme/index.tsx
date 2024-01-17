import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
        body: {
            fontFamily: 'GmkMedium',
        },
        footer: {
            fontFamily: 'FooterLight',
        },
        html: {
            fontFamily: 'GmkLight',
        }
    }
}})
    
export default theme
