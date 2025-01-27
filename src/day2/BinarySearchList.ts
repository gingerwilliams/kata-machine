export default function bs_list(haystack: number[], needle: number): boolean {
   let lo = 0; 
   let hi = haystack.length;

   do {
    const m = Math.floor(lo + (hi - lo) / 2);
    const indexValue = haystack[m];

    if(indexValue === needle) {
        return true
    } else if (indexValue > needle) { // our needle is greater than our value so we search high side
        // reduce the hi side to this point
        // exclude the midpoint
        // lo is inclusive
        // hi as exclusive 
        hi = m;
    } else {
        // drop the midpoint, we don't have to look at the midpoint again
        lo = m + 1
    }
   } while (lo < hi);

   return false
}