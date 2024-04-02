const arr = [
    { id: 5, name: 'Product1', qty: 2 },
    { id: 6, name: 'Product2', qty: 1 }
]
input1 = { id: 5, name: 'Product1', qty: 1 }
input2 = { id: 5, name: 'Product3', qty: 1 }

// Viết hàm cập nhật thêm 1 sản phẩm vào giỏ hàng
const pre_add_to_card = (input, arr) => {
    // kiểm tra  có bị trùng không ,nếu trung trả về số phần tử bị trùng
    // nếu không trùng trả về giá trị -1
    const index = arr.findIndex((item) => item.id === input.id);
    if (index !== -1) {
        arr[index].qty++;
    }
    else {
        arr.push(input)
    }
    return arr;
}
console.log(pre_add_to_card(input1, arr));//0
