class Mat
{
	static maior2(a, b)
	{
		if (a > b) {
            return a
        } else {
            return b
        }
	}
  
	static maior3(a, b, c)
	{
		let m = this.maior2(a, b)
		if (m > c){
            return m
        } else {
            return c
        }
	}
  
	static raiz(a)
	{
		return Math.sqrt(a);
	}
  
	static menor3(a, b, c)
	{
		if (this.maior2(a, b) === a) {
            if (b < c) {
                return b
            } else {
                return c
            }
        } else {
            return a
        }
	}
  
	static imc(h, p)
	{
		return p / (h*h)
	}
}

console.log(Mat.maior2(1, 2) === 2)
console.log(Mat.maior2(2, 1) === 2)
console.log(Mat.maior3(1, 2, 3) === 3)
console.log(Mat.maior3(3, 2, 1) === 3)
console.log(Mat.menor3(3, 2, 1) === 1)
console.log(Mat.menor3(3, 2, 1) === 1)
console.log(Mat.imc(176, 60))