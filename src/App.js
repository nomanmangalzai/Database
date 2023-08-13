import React  from 'react'; 
import { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import "bootstrap/dist/css/bootstrap.css"

const initialValues = {
  field1: '',
      // ... add fields 3-32 here
  field2: '',
  field3: '',
  field4: '', 
  field5: '',
  field6: '',
  field7: '',
  field8: '',
  field9: '',
  damanGoal: '',
  damanRast: '',
  field12: '',
  field13: '',
  field14: '',
  field15: '',
  field16: '',
  field17: '',
  field18: '',
  field19: '',
  field20: '',
  field21: '',
  field22: '',
  field23: '',
  field24: '',
  field25: '',
  field26: '',
  field27: '',
  field28: '',
  field29: '',
  field30: '',
  field31: '',
  field32: '',
};


const App =()=> {
  const handleSubmit = (values)=>{
    console.log(values) // handle form submission here
  }


  return (
   <div className='container'>
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
    <Form>
      <Field name="field1" type="text" placeholder="Field 1" />
      <br />

      <Field name="field2" type="text" placeholder="Field 2" />
      <br />

      {/* ... add fields 3-32 here */}
      {/* Example for field 3 */}
      <Field name="field3" type="text" placeholder="Field 3" />
      <br />
      <Field name="field4" type="text" placeholder="Field 4" />
      <br />
      <Field name="field5" type="text" placeholder="Field 5" />
      <br />
      <Field name="field6" type="text" placeholder="Field 6" />
      <br />
      <Field name="field7" type="text" placeholder="Field 7" />
      <br />

      <hr />


      <div className='design1'>
      <label>
      <Field name="design1" type="radio" value="sada" />
      sada
      </label>

      <br />
      <label>
      <Field name="design1" type="radio" value="bandakDar" />
      bandakDar
      </label>
      <br></br>
      <label>
      <Field name="design1" type="radio" value="ganeBazo" />
      ganeBazo
      </label>
      <br />
      <label>
      <Field name="design1" type="radio" value="baghalLooz" />
      baghalLooz
      </label>
      <br></br>
    
      </div>

      <hr />


      <div className='design2'>
      <label>
      <Field name="design2" type="radio" value="tokmaDesignDaar" />
      tokmaDesignDaar
      </label>
      <br />
      <label>
      <Field name="design2" type="radio" value="amSalayee" />
      amSalayee
      </label>
      <br />
      <label>
      <Field name="design2" type="radio" value="chamakTaarSingle" />
      chamakTaarSingle
      </label>
      <br />
      <label>
      <Field name="design2" type="radio" value="chokaSalayee" />
      chokaSalayee
      </label>
      <br />
      </div>

      <hr />


      <div className='design3'>
      <label>
      <Field name="design3" type="radio" value="halfCut" />
      halfCut
      </label>
      <br />
      <label>
      <Field name="design3" type="radio" value="halfGoal" />
      halfGoal
      </label>
      <br />
      <label>
      <Field name="design3" type="radio" value="poraBinGoal" />
      poraBinGoal
      </label>
      <br />
      
      </div>
      <hr />


      <div className='design7'>
        <label>SideJeeb</label><br></br>
      <label>
      <Field name="design7" type="radio" value="1" />
      1
      </label>
      <br />
      <label>
      <Field name="design7" type="radio" value="2" />
      2
      </label>
      <br />      
      </div>
      <hr />

      <div className='design4'>
      <label>
      <Field name="design4" type="radio" value="Bin1.1/1" />
      Bin1.1/1
      </label>
      <br />
      <label>
      <Field name="design4" type="radio" value="Bin1/1" />
      Bin1/1
      </label>
      <br />

      
   
      
      </div>


      <div className='design5'>
      <label>
      <Field name="design5" type="radio" value="2.1/2" />
      2.1/2
      </label>
      <br />
      <label>
      <Field name="design5" type="radio" value="3.3/2" />
      3.3/2
      </label>
      <br />
      <label>
      <Field name="design5" type="radio" value="3" />
      3
      </label>
      <br />
      
      </div>
      <hr />

      <div className='design6'>
        <label>bare shalwar</label><br></br>
      <label>
      <Field name="design6" type="radio" value="70" />
      70
      </label>
      <br />
      <label>
      <Field name="design6" type="radio" value="50" />
         50
      </label>
      <br />
      <label>
      <Field name="design6" type="radio" value="40" />
      40
      </label>
      <br />
      <label>
      <Field name="design6" type="radio" value="38" />
      38
      </label>
      <br />
      
      </div>
      <hr />

      <div className='design8'>
        <label>bare shalwar</label><br></br>
      <label>
      <Field name="design8" type="radio" value="fit" />
      fit
      </label>
      <br />
      <label>
      <Field name="design8" type="radio" value="goal" />
        goal
      </label>
      <br />
      <label>
      <Field name="design8" type="radio" value="plateDar" />
      plateDar
      </label>
      <br />
      <label>
      <Field name="design8" type="radio" value="double" />
      double
      </label>
      <br />
      <label>
      <Field name="design8" type="radio" value="fitt" />
      fitt
      </label>
      <br />
      </div>
      
      {/*  */}
      <div className='design9'>
        <label>bare shalwar</label><br></br>
      <label>
      <Field name="design9" type="radio" value="4-14" />
        4-14
      </label>
      <br />
      <label>
      <Field name="design9" type="radio" value="5-15" />
        5-15
      </label>
      <br />
      <label>
      <Field name="design9" type="radio" value="5-16" />
      5-16
      </label>
      <br />
      <label>
      <Field name="design9" type="radio" value="Qad" />
      Qad
      </label>
      <br />
      </div>

     
      <Field name="damanGoal" type="text" placeholder="damanGoal" />
      <br />
      <Field name="damanRast" type="text" placeholder="damanRast" />
      <br />
      <Field name="field12" type="text" placeholder="Field 12" />
      <br />
      <Field name="field13" type="text" placeholder="Field 13" />
      <br />
      <Field name="field14" type="text" placeholder="Field 14" />
      <br />
      <Field name="field15" type="text" placeholder="Field 15" />
      <br />
      <Field name="field16" type="text" placeholder="Field 16" />
      <br />
      <Field name="field17" type="text" placeholder="Field 17" />
      <br />
      <Field name="field18" type="text" placeholder="Field 18" />
      <br />
      <Field name="field19" type="text" placeholder="Field 19" />
      <br />
      <Field name="field20" type="text" placeholder="Field 20" />
      <br />
      <Field name="field21" type="text" placeholder="Field 21" />
      <br />
      <Field name="field22" type="text" placeholder="Field 22" />
      <br />
      <Field name="field23" type="text" placeholder="Field 23" />
      <br />
      <Field name="field24" type="text" placeholder="Field 24" />
      <br />
      <Field name="field25" type="text" placeholder="Field 25" />
      <br />
      <Field name="field26" type="text" placeholder="Field 26" />
      <br />
      <Field name="field27" type="text" placeholder="Field 27" />
      <br />
      <Field name="field28" type="text" placeholder="Field 28" />
      <br />
      <Field name="field29" type="text" placeholder="Field 29" />
      <br />
      <Field name="field30" type="text" placeholder="Field 30" />
      <br />
      <Field name="field31" type="text" placeholder="Field 31" />
      <br />
      <Field name="field32" type="text" placeholder="Field 32" />
      <br />
      <h1>jfkdljf</h1>

      {/* ... repeat for fields 4-32 */}
      
      <button type="submit">Submit</button>
    </Form>
  </Formik>

   </div>
  );
}

export default App;
