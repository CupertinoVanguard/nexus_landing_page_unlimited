export async function runBusinessAnalysis(posthogCred: any, langfuseCred: any) {
    if (posthogCred && langfuseCred) {
        const credentials = JSON.stringify({
            "posthog_api_key": posthogCred?.apiKey,
            "posthog_project_id": posthogCred?.projectId,
            "langfuse_public_key": langfuseCred?.publicKey,
            "langfuse_secret_key": langfuseCred?.secretKey,
        });

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/business_impact_analysis`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: credentials,
            }
        )

        if (response.status === 200) {
            const data = await response.json();
            console.log(data.task_id);
            return data.task_id;
        }
    }
    return "hello";
}

export async function checkStatus(job_id: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/agent_result`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "job_id": job_id,
            })
        }
    )

    if (response.status === 200) {
        const data = await response.json();
        if (data.ready) {
            return { "status": true, "content": data.value };
        } else {
            return { "status": false, "content": "" };
        }
    }
    return { "status": false, "content": "" };
}

export async function terminate(job_id: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/agent_terminate`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "job_id": job_id,
            })
        }
    )

    if (response.status === 200) {
        const data = await response.json();
        return data.status;
    }
    return false;
}

