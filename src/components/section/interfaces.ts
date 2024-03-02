import { FlexProps } from "../flex";

export interface SectionProps
  extends Omit<FlexProps<JSX.IntrinsicElements>, "as"> {
  title?: string;
}
