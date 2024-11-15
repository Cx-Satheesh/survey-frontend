import React from 'react';
import ChartComponent from '../../components/widgets/BarChartComponent';
import LineChartComponent from '../../components/widgets/LineChartComponent';

const Home: React.FC = () => {
  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 p-lsm gap-[20px]'>
        <div className='col-span-1 bg-white shadow-custom-card rounded-lg p-lsm'>
          <ChartComponent />
        </div>
        <div className='col-span-1 bg-white shadow-custom-card rounded-lg p-lsm'>
          <LineChartComponent />
        </div>
    </div>
  );
};

export default Home;