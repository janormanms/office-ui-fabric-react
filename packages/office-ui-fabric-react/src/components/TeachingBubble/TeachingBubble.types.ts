import * as React from 'react';

import { TeachingBubbleBase } from './TeachingBubble.base';
import { TeachingBubbleContentBase } from './TeachingBubbleContent.base';
import { IImageProps } from '../../Image';
import { IButtonProps } from '../../Button';
import { IAccessiblePopupProps } from '../../common/IAccessiblePopupProps';
import { ICalloutProps } from '../../Callout';
import { IStyle, ITheme } from '../../Styling';
import { IRefObject, IStyleFunctionOrObject } from '../../Utilities';

export interface ITeachingBubble {
  /** Sets focus to the TeachingBubble root element */
  focus(): void;
}

/**
 * TeachingBubble component props.
 */
export interface ITeachingBubbleProps extends React.Props<TeachingBubbleBase | TeachingBubbleContentBase>, IAccessiblePopupProps {
  /**
   * Optional callback to access the ITeachingBubble interface. Use this instead of ref for accessing
   * the public methods and properties of the component.
   */
  componentRef?: IRefObject<ITeachingBubble>;

  /**
   * Call to provide customized styling that will layer on top of the variant rules.
   */
  styles?: IStyleFunctionOrObject<ITeachingBubbleStyleProps, ITeachingBubbleStyles>;

  /**
   * Theme provided by High-Order Component.
   */
  theme?: ITheme;

  /**
   * Properties to pass through for Callout, reference detail properties in ICalloutProps
   */
  calloutProps?: ICalloutProps;

  /**
   * A headline for the Teaching Bubble.
   */
  headline?: string;

  /**
   * A variation with smaller bold headline and no margins.
   */
  hasCondensedHeadline?: boolean;

  /**
   * Does the TeachingBubble have a close button in the top right corner?
   */
  hasCloseIcon?: boolean;

  /**
   * An Image for the Teaching Bubble.
   */
  illustrationImage?: IImageProps;

  /**
   * The Primary interaction button
   */
  primaryButtonProps?: IButtonProps;

  /**
   * The Secondary interaction button
   */
  secondaryButtonProps?: IButtonProps;

  /**
   * Element to anchor the TeachingBubble to.
   */
  targetElement?: HTMLElement;

  /**
   * Callback when the TeachingBubble tries to close.
   */
  onDismiss?: (ev?: any) => void;

  /**
   * Whether or not the Teaching Bubble is wide, with image on the left side.
   */
  isWide?: boolean;

  /**
   * A variation with smaller bold headline and margins to the body (hasCondensedHeadline takes precedence if it is also set to true).
   */
  hasSmallHeadline?: boolean;

  /**
   *  Defines the element id referencing the element containing label text for TeachingBubble.
   */
  ariaLabelledBy?: string;

  /**
   * Defines the element id referencing the element containing the description for the TeachingBubble.
   */
  ariaDescribedBy?: string;
}

export type ITeachingBubbleStyleProps = Required<Pick<ITeachingBubbleProps, 'theme'>> &
  Pick<ITeachingBubbleProps, 'hasCondensedHeadline' | 'hasSmallHeadline' | 'isWide'> & {
    /** Class name for callout. */
    calloutClassName?: string;
    /** Class name for primary button. */
    primaryButtonClassName?: string;
    /** Class name for secondary button. */
    secondaryButtonClassName?: string;
  };

export interface ITeachingBubbleStyles {
  root: IStyle;
  body: IStyle;
  bodyContent: IStyle;
  closeButton: IStyle;
  content: IStyle;
  footer: IStyle;
  header: IStyle;
  headline: IStyle;
  imageContent: IStyle;
  primaryButton: IStyle;
  secondaryButton: IStyle;
  subText: IStyle;
}
