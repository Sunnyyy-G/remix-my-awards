import React from 'react';
import { Watermark } from 'antd';

interface WatermarkProps {
  children: React.ReactNode; // 或 Element
}

const WatermarkComponent: React.FC<WatermarkProps> = ({ children }) => {
    return (
        <Watermark content={['LIGEN', 'Front-end development']}>
            {children}
        </Watermark>
    );
};
export default WatermarkComponent;
