'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button"

interface FormData {
  effectiveDate: string | null;
  operatorId: string | null;
}

const initialForm: FormData = {
  effectiveDate: null,
  operatorId: null
};

interface BullionData {
  BullionID: string;
  Name: string;
  Purity: number;
  MaxRate: number;
  BullionRate: number;
  MinRate: number;
}

const initialBullionData: BullionData[] = [];

export default function BullionRate() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [bullionData, setBullionData] = useState<BullionData[]>(initialBullionData);
  const [isTableModified, setIsTableModified] = useState(false); //

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  }

  const handleViewClick =async (e: React.FormEvent<HTMLFormElement>)  => {

    e.preventDefault(); 
    const response = await fetch(`http://localhost:8080/GetBullionRate?bankId=61&effectiveDate=${form.effectiveDate}&operatorId=${form.operatorId}`);
    const data = await response.json();

    setBullionData(data[1].map((item: { BullionID: any; Name: any; Purity: any; MaxRate: any; BullionRate: any; MinRate: any; }) => ({
      BullionID: item.BullionID,
      Name: item.Name,
      Purity: item.Purity,
      MaxRate: item.MaxRate,
      BullionRate: item.BullionRate, 
      MinRate: item.MinRate
    })));
  }

  const handleSaveClick = async () => {
    if (isTableModified) {
      const requestBody = {
        bankId: "61",
        effectiveDate: form.effectiveDate,
        bullionRateDetJson: bullionData.map((data) => ({
          bullionId: data.BullionID,
          bullionRate: data.BullionRate,
          minRate: data.MinRate,
          maxRate: data.MaxRate,
        })),
        operatorId: form.operatorId,
        createdBy: "user123",
        createdOn: "2023-08-15T10:00:00",
        modifiedBy: "user456",
        modifiedOn: "2023-08-15T11:30:00",
        supervisedBy: "supervisor789",
        supervisedOn: "2023-08-15T12:15:00",
        updateCount: 1,
      };
  
      try {
        const response = await fetch("http://localhost:8080/AddEditBullionRate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });
  
        if (response.ok) {
          setIsTableModified(false); // Reset the table modification flag
        } else {
          console.error("Failed to save data.");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  }
  

  const handleEditClick = () => {
    // Handle the edit button click
  }
  const clearForm = () => {
    setForm(initialForm); 
  }

  const handleBullionDataChange = (index: number, field: keyof BullionData, value: string) => {
    const newData = [...bullionData];
    newData[index][field] = parseFloat(value);
    setBullionData(newData);
    setIsTableModified(true); // Mark the entire table as modified
    setBullionData(newData);
  }

  return (
    <div className="flex">
      <div className="w-1/4 m-10 round-2xl">
        <form className="bg-white shadow-md rounded-2xl px-10 pt-6 pb-8 mb-4">
          <h1 className='text-2xl font-bold text-center'>BullionRate</h1>

          <div className="mb-4">
            <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="EffectiveDate">
              EffectiveDate
            </label>
            <div className="shadow border rounded-md focus-outline-none focus-shadow-outline rounded-lg"
              id="EffectivceDate" >
              <input
                type="date"
                name="effectiveDate"
                className="w-full py-2 pl-2 pr-2 rounded-lg"
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="mb-4">
            <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="OperatorId">
              OperatorId
            </label>
            <div className="shadow border rounded-md focus-outline-none focus-shadow-outline rounded-lg" 
              id="OperatorId" >
              <input
                type="text"
                name="operatorId"
                className="w-full py-2 pl-2 pe-2  rounded-lg"
                onChange={handleChange}

              />
            </div>

          </div>
          <div className="flex space-4 justify-center">
            <div className="m-1">
              <Button variant="outline" onClick={handleViewClick}>View</Button>
            </div>


            <div className="m-1">
            <Button variant="outline" onClick={clearForm}>
              Clear
            </Button>
            </div>


            {/* <div className="m-1">
              <Button variant="outline" onClick={handleEditClick}>Edit</Button>
            </div> */}

          </div>
        </form>
      </div>

      {/* Table of data */}
      <div className="w-auto m-10 justify-center">
        {
          bullionData.length > 0 && (
          <table className="table-auto w-full border-collapse border border-gray-200 bg-white rounded-xl shadow-md">
            <thead>
              <tr>
                <th className="border border-gray-200 px-4 py-2">BullionID</th>
                <th className="border border-gray-200 px-4 py-2">Name</th>
                <th className="border border-gray-200 px-4 py-2">Purity</th>
                <th className="border border-gray-200 px-4 py-2">MaxRate</th>
                <th className="border border-gray-200 px-4 py-2">BullionRate</th>
                <th className="border border-gray-200 px-4 py-2">MinRate</th>
              </tr>
            </thead>
            <tbody>
              {bullionData.map((data, index) => (
                <tr key={index}>
                  <td className="border border-gray-200 px-4 py-2">{data.BullionID}</td>
                  <td className="border border-gray-200 px-4 py-2">{data.Name}</td>
                  <td className="border border-gray-200 px-4 py-2">{data.Purity}</td>
                  <td className="border border-gray-200 px-4 py-2">
                    <input
                      type="number"
                      value={data.MaxRate}
                      onChange={(e) => handleBullionDataChange(index, 'MaxRate', e.target.value)}
                      className="w-full py-1"
                    />
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    <input
                      type="number"
                      value={data.BullionRate}
                      onChange={(e) => handleBullionDataChange(index, 'BullionRate', e.target.value)}
                      className="w-full py-1"
                    />
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    <input
                      type="number"
                      value={data.MinRate}
                      onChange={(e) => handleBullionDataChange(index, 'MinRate', e.target.value)}
                      className="w-full py-1"
                    />
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        )
        }
            {/* Save button for the entire table */}
    <div className="flex justify-center m-4">
      {isTableModified && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSaveClick}
        >
          Save
        </button >
      )}
    </div>
      </div>

    </div>
  )
}
function setIsTableModified(arg0: boolean) {
  throw new Error('Function not implemented.');
}

