export default function Challenges(){
    return(
        <div className="m-auto text-center max-w-[500px] border border-gray-800 rounded-lg p-5 my-10">
            <div>Create Challenges</div>
            <div>
                <Dropdown></Dropdown>
            </div>
            <button className="bg-yellow-400 p-3 m-3 rounded-md">Create</button>
            <div className="font-extrabold text-3xl">Active Challenges</div>
            <div>
                <div className="font-semibold">Challenge #0</div>
                <div><span className="font-semibold">Your Move:</span> <span>HIDDEN</span></div>
                <div>Waiting an opponent...</div>
                <button className="bg-blue-500 p-3 m-3 rounded-md text-white font-semibold">Update Challenges</button>
            </div>
        </div>
    )

    function Dropdown(){
        return(
            <div className="pt-3">
                <div>Choice</div>
                <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none focus:border-indigo-600">
                    <option>Rock</option>
                    <option>Paper</option>
                    <option>Secissor</option>
                </select>
            </div>
        )
    }
}