const ConfirmationModal = ({ url, hash, uri }) => {
    return (`
        <div class="alert alert-success" role="alert">
            <div class="flex">
                <div>
                    <p class="font-bold">Your site is live!</p>
                    <p class="text-sm">You can visit it at <a class="text-indigo-600 underline" href="${url}" target="__blank">ipfs/${hash}</a></p>
                    <p class="text-sm">Or with your dappify subdomain at <a class="text-indigo-600 underline" href="${uri}" target="__blank">${uri}</a></p>
                    <p class="text-sm">Make sure to copy the URL and share it with your friends!.</p>
                </div>
            </div>
        </div>
    `)
}

export default ConfirmationModal;