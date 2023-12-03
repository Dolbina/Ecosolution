import {
  ElectricitySection,
  ElectricityTitle,
  ElecticityWrap,
  Rectangle,
  Counter,
  CounterNumbers,
  CounterWrap,
} from './Electricity.styled.js';

const Electricity = () => {
  return (
    <ElectricitySection>
      <ElecticityWrap>
        <ElectricityTitle>
          Electricity we produced for all time
        </ElectricityTitle>
        <Rectangle />
        <CounterWrap>
          <CounterNumbers>1.134.147.814</CounterNumbers>
          <Counter>kWh</Counter>
        </CounterWrap>
      </ElecticityWrap>
    </ElectricitySection>
  );
};

export default Electricity;
