import React, { useState } from 'react'

const User = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        language: [],
        hobbies: [],
        gender: "",
        option: "",
        course: "",
        address: "",
        file: ""
    })

    const handlechange = (e) => {
        const { name, value, checked, type, files } = e.target
        setUser((prev) => ({
            ...prev, [name]:
                type === "checkbox"
                    ? Array.isArray(prev[name])
                        ? checked
                            ? [...prev[name], value]
                            : prev[name].filter((val) => val === value)
                        : checked
                    : type === "file"
                        ? files[0] : value

        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
    }
    return (
        <div>
            <label htmlFor="">Name</label>
            <input type="text" name='name' value={user.name} onChange={handlechange} /><br />
            <label htmlFor="">Email</label>
            <input type="email" name='email' value={user.email} onChange={handlechange} /><br />
            <label htmlFor="">Languages</label><br /><br />
            <label htmlFor=""><input type="checkbox" name='language' value='Telugu' checked={user.language.includes("Telugu")} onChange={handlechange} />Telugu</label><br />
            <label htmlFor=""><input type="checkbox" name='language' value='kannada' checked={user.language.includes("kannada")} onChange={handlechange} />Kannada</label><br />
            <label htmlFor=""><input type="checkbox" name='language' value='Tamil' checked={user.language.includes("Tamil")} onChange={handlechange} />Tamil</label><br />
            <label htmlFor=""><input type="checkbox" name='language' value='Maliyalam' checked={user.language.includes("Maliyalam")} onChange={handlechange} />Maliyalam</label><br />
            <label htmlFor="">Hobbies</label><br /> <br />
            <label htmlFor=""><input type="checkbox" name='hobbies' value='writting' checked={user.hobbies.includes("writting")} onChange={handlechange} />Writting</label><br />
            <label htmlFor=""><input type="checkbox" name='hobbies' value='eatting' checked={user.hobbies.includes("eatting")} onChange={handlechange} />Eatting</label><br />
            <label htmlFor=""><input type="checkbox" name='hobbies' value='playing' checked={user.hobbies.includes("playing")} onChange={handlechange} />Playing</label><br />
            <label htmlFor=""><input type="checkbox" name='hobbies' value='dancing' checked={user.hobbies.includes("dancing")} onChange={handlechange} />Dancing</label><br />
            <label htmlFor="">Gender</label><br />
            <label htmlFor=""><input type="radio" name='gender' value='male' checked={user.gender === "male"} onChange={handlechange} />Male</label><br />
            <label htmlFor=""><input type="radio" name='gender' value='female' checked={user.gender === "female"} onChange={handlechange} />Female</label><br />
            <label htmlFor=""><input type="radio" name='gender' value='trance' checked={user.gender === "trance"} onChange={handlechange} />Trance</label><br /><br />
            <label htmlFor="">Opinion</label><br /><br />
            <label htmlFor=""><input type="radio" name='option' value='yes' checked={user.option === "yes"} onChange={handlechange} />Yes</label><br />
            <label htmlFor=""><input type="radio" name='option' value='no' checked={user.option === 'no'} onChange={handlechange} />No</label><br />
            <label htmlFor="">Select</label>
            <select name="course" value={user.course} onChange={handlechange}>
                <option value="python">Python</option>
                <option value="java">JavaScript</option>
                <option value="reactjs">ReactJs</option>
                <option value="javaScript">Angular</option>

            </select><br />
            <label htmlFor="">Address</label><br />
            <textarea name="address" rows={"4"} cols={"50"} value={user.address} onChange={handlechange}></textarea><br />
            <input type="file" name='file' onChange={handlechange} />

            <button type='button' onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default User;