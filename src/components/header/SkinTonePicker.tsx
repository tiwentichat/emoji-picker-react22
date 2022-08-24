import * as React from 'react';
import './SkinTonePicker.css';
import { useState } from 'react';

import skinToneVariations from '../../data/skinToneVariations';
import clsx from 'clsx';
import { useActiveSkinToneState } from '../contextProvider/PickerContextProvider';
import Relative from '../Layout/Relative';

export function SkinTonePicker() {
  const [fanOpen, setFanOpen] = useState(false);
  const [activeSkinTone, setActiveSkinTone] = useActiveSkinToneState();

  return (
    <Relative className="epr-skin-tones">
      <div
        className={clsx('epr-skin-tone-select', {
          'epr-skin-tone-select-open': fanOpen
        })}
        onClick={() => setFanOpen(!fanOpen)}
      >
        {skinToneVariations.map((skinToneVariation, i) => {
          const active = skinToneVariation === activeSkinTone;
          return (
            <button
              style={{
                transform: clsx(
                  `translateX(-${i * (fanOpen ? 25 : 0)}px)`,
                  fanOpen && active && 'scale(1.3)'
                )
              }}
              onClick={() => {
                fanOpen && setActiveSkinTone(skinToneVariation);
              }}
              key={skinToneVariation}
              className={clsx(`epr-tone-${skinToneVariation}`, 'epr-tone', {
                active
              })}
            ></button>
          );
        })}
      </div>
    </Relative>
  );
}