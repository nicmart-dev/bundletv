import SelectGenres from "../../components/SelectGenres/SelectGenres";
import SelectBudget from "../../components/SelectBudget/SelectBudget";
import Hero from "../../components/hero1/hero1"
import SelectKids from '../../components/SelectKids/SelectKids';
import HDChannels from "../../components/HDChannels/HDChannels";
import SelectChannels from "../../components/SelectChannels/SelectChannels";
import SelectAccessibility from "../../components/SelectAccessibility/SelectAccessibility";
import SelectThemes from "../../components/SelectThemes/SelectThemes";
import SelectStreaming from '../../components/SelectStreaming/SelectStreaming';
import ButtonBundle from '../../components/ButtonBundle/ButtonBundle';


function SelectOptions() {
  return (
    <>
      {/* TODO: Insert Step 1 budget component */}
      <Hero />
      <SelectBudget />
      <SelectGenres />
      <SelectThemes />
      <SelectChannels />
      <HDChannels />
      <SelectStreaming />
      <SelectKids />
      <SelectAccessibility/>
      <ButtonBundle />
    </>
  );
}

export default SelectOptions;
