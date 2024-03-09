// NOTE
// TouchableHighlight

// • What it does: Darkens or lightens the background of the element when pressed.

// • When to use it: On iOS for touchable elements or buttons that have a solid shape or background, and on ListView items.

// TouchableOpacity

// • What it does: Lightens the opacity of the entire element when pressed.

// • When to use it: On iOS for touchable elements that are standalone text or icons with no background color.

// TouchableNativeFeedback

// • What it does: Adds a ripple effect to the background when pressed.

// • When to use it: On Android for almost all touchable elements.

import React, {useMemo} from 'react';
import {Insets, Platform, TouchableOpacity} from 'react-native';
import Utils from '../../Utility/Utils';
// import Utils from '../../utility/Utils';
interface IButtonView {
  style?: any;
  hitSlop?: Insets;
  onPress?: Function;
  disabled?: boolean;
  enableClick?: boolean;
  onLongPress?: Function;
  disableRipple?: boolean;
  iosSolidShape?: boolean;
  children: React.ReactNode;
  isBackgroundBorderLess?: boolean;
}

export const ButtonView = ({
  style,
  children,
  hitSlop,
  enableClick = false,
  disabled = false,
  onPress = () => null,
  onLongPress = () => null,
}: IButtonView) => {
  const [debounceTime, debounceConfig] = useMemo(
    () => [
      Platform.select({
        ios: 200,
        android: 700,
      }),
      {
        leading: true,
        trailing: false,
      },
    ],
    [],
  );

  const _onPress = Utils.debounce(onPress, debounceTime, debounceConfig);
  const _onLongPress = Utils.debounce(
    onLongPress,
    debounceTime,
    debounceConfig,
  );

  return (
    <TouchableOpacity
      style={style}
      onPress={_onPress}
      activeOpacity={0.5}
      disabled={enableClick || disabled}
      onLongPress={_onLongPress}
      hitSlop={hitSlop}>
      {children}
    </TouchableOpacity>
  );
};

export default ButtonView;
