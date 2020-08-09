import React, { ComponentType } from 'react';
import { Fade } from '@material-ui/core';

export const withFade = (enterTimeout: number, exitTimeout: number) => <
    T extends object
>(
    WrappedComponent: ComponentType<T>,
  ): React.FC<T> => ({ ...props }) => (
    <div>
      <Fade in timeout={{ enter: enterTimeout, exit: exitTimeout }}>
        <div>
          <WrappedComponent {...(props as T)} />
        </div>
      </Fade>
    </div>
  );
