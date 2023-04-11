import { css } from '@emotion/css'

export const BaseImage = css`
  height: auto;
  object-fit: contain;
  width: 100%;
  /* height:〇〇px */
  &.-shadow {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`
