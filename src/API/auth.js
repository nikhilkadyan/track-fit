const serverURL = 'https://u4v4gc8967.execute-api.ap-south-1.amazonaws.com/dev';

export async function loginUser(data) {
    try {
        const response = await fetch(`${serverURL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    } catch (err) {
        console.error(err)
        return false;
    }
    
}

export async function registerUser(data) {
    try {
        const response = await fetch(`${serverURL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    } catch (err) {
        console.error(err)
        return false;
    }
}
