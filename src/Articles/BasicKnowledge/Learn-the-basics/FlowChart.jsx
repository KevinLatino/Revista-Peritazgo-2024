import React from 'react'
import FlowCharts from '../../../Images/FlowChart.png'
import {
  Paragraph,
  Space,
  BlueTitle
} from '../../../Components/PageTextsComponent';
import { BlueSection } from '../../../Components/SectionsComponent';

const FlowChart = () => {

  return (
    <>

      <BlueSection>
        <BlueTitle>
          Diagramas de flujo
        </BlueTitle>

        <Paragraph>
          Representaciones gráficas de secuencias de pasos a realizar. Son estándares globales por la (ANSI American National Standars Institute)
        </Paragraph>

        <Space />

        <div className='flex justify-center items-center'>
          <img src={FlowCharts} width={325} />
        </div>

      </BlueSection>
    </>
  )
}

export { FlowChart }