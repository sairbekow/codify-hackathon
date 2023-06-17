import styled from 'styled-components'

enum Sizes {
  mobileS = '375px',
  mobile = '575px',
  tablet = '768px',
  laptop = '992px',
  desktop = '1200px',
  desktopL = '1400px',
}

interface IDevice {
  mobileS: string
  mobile: string
  tablet: string
  laptop: string
  desktop: string
  desktopL: string
}

export const device = {
  mobileS: `max-width: ${Sizes.mobileS}`,
  mobile: `max-width: ${Sizes.mobile}`,
  tablet: `max-width: ${Sizes.tablet}`,
  laptop: `max-width: ${Sizes.laptop}`,
  desktop: `max-width: ${Sizes.desktop}`,
  desktopL: `max-width: ${Sizes.desktopL}`,
} as IDevice

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  @media screen and (${device.desktop}) {
    width: 960px;
  }

  @media screen and (${device.laptop}) {
    width: 720px;
  }

  @media screen and (${device.tablet}) {
    width: 540px;
  }

  @media screen and (${device.mobile}) {
    width: 100%;
    padding: 0 15px;
  }
`
