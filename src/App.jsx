import Education from './components/Education';
import GeneralInfo from './components/GeneralInfo'
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div>
      <h1>CV Builder</h1>
      <GeneralInfo/>
      <Education/>
      <WorkExperience/>
    </div>
  );
}

export default App;