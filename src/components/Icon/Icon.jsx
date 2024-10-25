import clsx from 'clsx';
import AlcoveIcon from '../../assets/alcove.svg?react';
import ToolIcon from '../../assets/tool.svg?react';
import CupIcon from '../../assets/cup-hot.svg?react';
import DiagramIcon from '../../assets/diagram.svg?react';
import FridgeIcon from '../../assets/fridge.svg?react';
import FuelIcon from '../../assets/fuel-pump.svg?react';
import FullyIcon from '../../assets/fully.svg?react';
import GasIcon from '../../assets/gas.svg?react';
import HeartIcon from '../../assets/heart.svg?react';
import MapIcon from '../../assets/map.svg?react';
import MicrowaveIcon from '../../assets/microwave.svg?react';
import RadioIcon from '../../assets/radio.svg?react';
import ShowerIcon from '../../assets/shower.svg?react';
import StarIcon from '../../assets/star.svg?react';
import TvIcon from '../../assets/tv.svg?react';
import VanIcon from '../../assets/van.svg?react';
import WaterIcon from '../../assets/water.svg?react';
import WindIcon from '../../assets/wind.svg?react';
import css from './Icon.module.css';

const iconMap = {
  alcove: AlcoveIcon,
  cup: CupIcon,
  fridge: FridgeIcon,
  fuel: FuelIcon,
  fully: FullyIcon,
  diagram: DiagramIcon,
  default: ToolIcon,
  gas: GasIcon,
  heart: HeartIcon,
  map: MapIcon,
  microwave: MicrowaveIcon,
  radio: RadioIcon,
  shower: ShowerIcon,
  star: StarIcon,
  tv: TvIcon,
  van: VanIcon,
  water: WaterIcon,
  wind: WindIcon,
};

const Icon = ({ name, size = 20, className }) => {
  const IconComponent = iconMap[name] || iconMap['default'];
  const iconClasses = clsx(css['icon'], className);

  return <IconComponent className={iconClasses} width={size} height={size} />;
};

export default Icon;
